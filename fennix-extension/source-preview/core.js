(function attachFennixCore(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FennixCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function createFennixCore() {



  const QUICK_TOOL_LABELS = Object.freeze({
    bugfix: 'Corrigir Bug',
    refactor: 'Refatorar',
    ui: 'UI Premium',
    explain: 'Explicar Código',
    optimize: 'Performance',
    security: 'Segurança',
    tests: 'Criar Testes',
    responsive: 'Responsividade',
    autopilot: 'Autopilot'
  });

  const QUICK_TOOLS = Object.freeze({
    bugfix: 'Corrija o problema de forma objetiva, encontre a causa raiz, preserve as funcionalidades existentes e valide a correção antes de concluir.',
    refactor: 'Refatore somente o que for necessário para melhorar legibilidade, manutenção e organização, sem alterar o comportamento funcional.',
    ui: 'Melhore a interface com acabamento profissional, hierarquia visual, espaçamento, responsividade e consistência, preservando o fluxo existente.',
    explain: 'Analise o código necessário e explique de forma técnica e curta o que foi alterado e por quê, sem transformar a resposta em um tutorial longo.',
    optimize: 'Otimize desempenho e tempo de carregamento, elimine trabalho redundante e preserve o comportamento funcional e a compatibilidade.',
    security: 'Revise segurança apenas no escopo do pedido, corrija riscos concretos sem expor segredos e preserve o princípio do menor privilégio.',
    tests: 'Crie ou ajuste testes focados no comportamento solicitado e execute as verificações relevantes antes de concluir.',
    responsive: 'Garanta responsividade real em desktop, tablet e mobile, corrigindo overflow, hierarquia e áreas de toque sem remover funcionalidades.',
    autopilot: 'Analise o pedido e o contexto existente, identifique melhorias pragmáticas que aumentem qualidade, clareza e robustez, implemente somente o que trouxer valor real, preserve o fluxo e as funcionalidades atuais e valide antes de concluir. Evite reescritas desnecessárias.'
  });

  const CHATGPT_SEND_SELECTORS = Object.freeze([
    '#composer-submit-button',
    "button[data-testid='send-button']",
    "button[data-testid='composer-send-button']",
    "button[data-testid*='send']",
    "button[aria-label*='Send' i]",
    "button[aria-label*='Enviar' i]",
    "button[title*='Send' i]",
    "button[title*='Enviar' i]",
    "button[type='submit']"
  ]);



  function conversationKey(repository = '') {
    return String(repository || '').trim().toLowerCase();
  }

  function isChatConversationUrl(value = '') {
    try {
      const url = new URL(String(value || ''));
      return url.origin === 'https://chatgpt.com' && /^\/c\/[^/?#]+/.test(url.pathname);
    } catch {
      return false;
    }
  }

  function cleanConversationUrl(value = '') {
    if (!isChatConversationUrl(value)) return '';
    const url = new URL(String(value));
    return `${url.origin}${url.pathname}`;
  }

  function applyQuickTool(userPrompt = '', toolId = '') {
    const request = String(userPrompt || '').trim();
    const instruction = QUICK_TOOLS[String(toolId || '').trim()] || '';
    if (!instruction) return request;
    return `${request}\n\nDiretriz Fennix: ${instruction}`;
  }

  function stripQuickToolBlock(userPrompt = '') {
    return String(userPrompt || '')
      .replace(/(?:^|\n{1,3})Ação Fennix:[^\n]*\nDetalhamento da ação:[^\n]*(?=\n|$)/gi, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  function applyQuickToolBlock(userPrompt = '', toolId = '') {
    const request = stripQuickToolBlock(userPrompt);
    const normalizedTool = String(toolId || '').trim();
    const instruction = QUICK_TOOLS[normalizedTool] || '';
    const label = QUICK_TOOL_LABELS[normalizedTool] || normalizedTool;
    if (!instruction) return request;
    const block = `Ação Fennix: ${label}\nDetalhamento da ação: ${instruction}`;
    return request ? `${request}\n\n${block}` : block;
  }

  function buildChatLaunchUrl(prompt = '') {
    const url = new URL('https://chatgpt.com/');
    url.searchParams.set('prompt', String(prompt || '').trim());
    return url.toString();
  }
  function normalizeText(value = '') {
    return String(value)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  function composerContainsPrompt(composerText = '', userPrompt = '') {
    const haystack = normalizeText(composerText);
    const needle = normalizeText(userPrompt);
    if (!needle) return haystack.length > 0;
    return haystack.includes(needle.slice(0, Math.min(needle.length, 120)));
  }

  function compactRunId(runId = '') {
    return String(runId || '').trim().slice(0, 64);
  }

  function buildChatPrompt({ userPrompt = '', repository = '', branch = 'main', runId = '', toolId = '' } = {}) {
    const request = String(userPrompt || '').trim();
    const repo = String(repository || '').trim();
    const ref = String(branch || 'main').trim() || 'main';
    const marker = compactRunId(runId) || 'sem-id';
    const normalizedTool = String(toolId || '').trim();
    const requestWithAction = applyQuickToolBlock(request, normalizedTool);

    return [
      `FENNIX TURBO [${marker}]`,
      `Repositório: ${repo} · branch ${ref}`,
      `Pedido: ${requestWithAction}`,
      '',
      'Use a conexão GitHub já autorizada nesta conta. Leia somente os arquivos necessários, implemente a solicitação e faça o commit diretamente no GitHub na branch indicada.',
      `Use uma mensagem de commit começando exatamente por: FENNIX[${marker}]`,
      'Não cole arquivos completos, diffs extensos nem JSON na conversa. Preserve tudo que não fizer parte do pedido e nunca altere .env, segredos, node_modules, .git ou .github/workflows.',
      'Quando terminar o commit, responda de forma curta informando que concluiu.'
    ].join('\n');
  }

  function selectReusableChatTab(tabs = [], rememberedId = null, conversationUrl = '') {
    const chatTabs = (Array.isArray(tabs) ? tabs : []).filter((tab) =>
      tab?.id && /^https:\/\/chatgpt\.com\//i.test(String(tab.url || ''))
    );
    if (!chatTabs.length) return null;

    const remembered = chatTabs.find((tab) => Number(tab.id) === Number(rememberedId));
    if (remembered) return remembered;

    const cleanTarget = cleanConversationUrl(conversationUrl);
    if (cleanTarget) {
      const sameConversation = chatTabs.find((tab) => cleanConversationUrl(tab.url || '') === cleanTarget);
      if (sameConversation) return sameConversation;
    }

    return [...chatTabs].sort((a, b) => Number(b.lastAccessed || 0) - Number(a.lastAccessed || 0))[0] || null;
  }


  function resolveProjectConversationTarget({ savedConversationUrl = '', currentTabUrl = '', tabRepository = '', repository = '' } = {}) {
    const saved = cleanConversationUrl(savedConversationUrl);
    if (saved) return { url: saved, source: 'saved' };

    const current = cleanConversationUrl(currentTabUrl);
    const sameRepository = conversationKey(tabRepository) && conversationKey(tabRepository) === conversationKey(repository);
    if (current && sameRepository) return { url: current, source: 'current' };

    return { url: 'https://chatgpt.com/', source: 'new' };
  }

  function persistentSetupScore({ repositoryConfigured = false, lovableReady = false } = {}) {
    return [Boolean(repositoryConfigured), Boolean(lovableReady)].filter(Boolean).length;
  }


  function pipelineReadiness({ githubConnected = false, repositoryConfigured = false, lovableReady = false } = {}) {
    if (!githubConnected) {
      return {
        score: 0,
        label: 'Conecte o GitHub',
        detail: 'Autorize o GitHub para liberar seus projetos.',
        action: 'settings'
      };
    }
    if (!repositoryConfigured) {
      return {
        score: 35,
        label: 'Escolha o projeto',
        detail: 'Selecione o repositório e a branch que o Fennix vai alterar.',
        action: 'settings'
      };
    }
    if (!lovableReady) {
      return {
        score: 70,
        label: 'Vincule o preview',
        detail: 'Conecte o projeto Lovable para fechar o ciclo visual.',
        action: 'settings'
      };
    }
    return {
      score: 100,
      label: 'Pipeline pronto',
      detail: 'GitHub, projeto e preview estão alinhados.',
      action: 'prompt'
    };
  }

  function assessPromptQuality(userPrompt = '', toolId = '') {
    const request = stripQuickToolBlock(userPrompt).trim();
    if (!request) return { score: 0, label: 'Escreva seu pedido', tone: 'idle' };

    let score = 25;
    if (request.length >= 20) score += 20;
    if (request.length >= 60) score += 15;
    if (/(corrij|melhor|alter|crie|adicione|remova|otimiz|refator|ajust|mude|faça|implemente)/i.test(request)) score += 10;
    if (/(preserv|mantenha|sem alterar|sem remover|não alter|nao alter|compatib|existente)/i.test(request)) score += 15;
    if (/(valid|teste|verifique|confirme|garanta|antes de concluir)/i.test(request)) score += 10;
    if (QUICK_TOOLS[String(toolId || '').trim()]) score += 15;
    score = Math.min(100, score);

    if (score >= 80) return { score, label: 'Pedido forte · pronto para executar', tone: 'strong' };
    if (score >= 55) return { score, label: 'Bom pedido · mais contexto pode ajudar', tone: 'good' };
    return { score, label: 'Adicione contexto e resultado esperado', tone: 'weak' };
  }

  function isExpectedRunCommit(commitMessage = '', runId = '') {
    const marker = compactRunId(runId);
    if (!marker) return false;
    return String(commitMessage || '').includes(`FENNIX[${marker}]`);
  }

  function hasHeadChanged(baseSha, currentSha) {
    const base = String(baseSha || '').trim();
    const current = String(currentSha || '').trim();
    if (!current) return false;
    if (!base) return true;
    return base !== current;
  }

  return { QUICK_TOOL_LABELS, QUICK_TOOLS, CHATGPT_SEND_SELECTORS, conversationKey, isChatConversationUrl, cleanConversationUrl, applyQuickTool, stripQuickToolBlock, applyQuickToolBlock, buildChatLaunchUrl, buildChatPrompt, selectReusableChatTab, resolveProjectConversationTarget, composerContainsPrompt, normalizeText, persistentSetupScore, pipelineReadiness, assessPromptQuality, isExpectedRunCommit, compactRunId, hasHeadChanged };
});
