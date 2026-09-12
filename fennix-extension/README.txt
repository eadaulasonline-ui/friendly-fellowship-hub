FENNIX PIPELINE 3.13 — PREMIUM COMMAND CENTER

VISUAL PREMIUM
- Console redesenhado do zero com hierarquia visual, tipografia legível e espaçamento consistente.
- Tela principal reduzida ao essencial: projeto, integrações, conversa, pedido e execução.
- Configurações e diagnóstico agora ficam em drawers próprios e não poluem o workspace.
- Ações rápidas com ícones vetoriais consistentes: Corrigir, Refatorar, UI Premium, Performance, Segurança, Testes, Responsivo e Explicar.
- Layout responsivo para painel lateral estreito e opção de densidade Compacta/Confortável.

PRODUTIVIDADE
- Ctrl+K abre a Command Palette.
- Ctrl+Enter executa a solicitação.
- Project Switcher permite trocar rapidamente de repositório sem abrir Configurações.
- Uma conversa ChatGPT persistente por repositório continua sendo reutilizada.
- “Nova conversa” cria novo contexto somente quando você solicitar.
- Histórico permanece separado por projeto.
- Campo e anexos são limpos após o envio confirmado.

PIPELINE
Fennix → ChatGPT → GitHub → Lovable

O GitHub continua sendo a fonte de verdade. O Fennix não transporta arquivos completos ou JSON gigantes pela conversa. Depois do commit, o Lovable é atualizado pelo Git Sync e o preview real é aberto quando verificável.

INSTALAÇÃO
1. Desative a versão anterior em chrome://extensions.
2. Extraia fennix-pipeline-v3.13.zip.
3. Em chrome://extensions, ative “Modo do desenvolvedor”.
4. Clique “Carregar sem compactação”.
5. Selecione a pasta fennix-v3.13.

ATALHOS
- Ctrl+K: ações rápidas.
- Ctrl+Enter: executar.
- Engrenagem: configurações.
- Ícone de gráfico: diagnóstico técnico.
- Ícone de linhas: alternar densidade.

MELHORIAS 3.13
- Novo painel de prontidão mostra em porcentagem o que falta para o pipeline ficar operacional e leva direto à próxima ação.
- Autopilot analisa o pedido, propõe melhorias pragmáticas e preserva o fluxo existente sem reescritas desnecessárias.
- Qualidade do pedido é avaliada em tempo real para ajudar o usuário a enviar instruções mais claras.
- Histórico agora possui busca por pedido, ação, branch e resumo do commit.
- Feedback crítico aparece em toasts sem obrigar o usuário a abrir o diagnóstico.
- Atualização do painel ficou mais leve: eventos de storage são agrupados e o polling respeita a visibilidade da extensão.
- Mantidas as correções 3.12 de aba única do ChatGPT, conversa persistente e ações com detalhamento completo.
