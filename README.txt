FENNIX PIPELINE 3.0 — CHATGPT → GITHUB → LOVABLE

O QUE MUDOU
- Configuração guiada em 3 passos: GitHub, repositório e Lovable.
- Detecção automática dos repositórios liberados pelo token.
- Branch principal detectada automaticamente.
- ChatGPT pode ser aberto automaticamente quando necessário.
- Lovable é usado como preview via Git Sync; o Fennix NÃO pede ao Lovable para reimplementar a mesma mudança, evitando duplicidade e conflitos.
- Diagnóstico integrado das conexões.
- Proteção de token contra acesso pelos scripts das páginas.
- Contexto do GitHub carregado em paralelo para reduzir tempo de preparação.
- Commit atômico: todos os arquivos entram juntos em um único commit.
- Verificação de conflito antes do commit para não sobrescrever alterações recentes.
- Histórico dos commits feitos pelo Fennix.
- Suporte a criação, alteração e remoção de arquivos.
- Revisão opcional antes do commit.

INSTALAÇÃO
1. Descompacte a pasta fennix-v3.
2. Abra chrome://extensions no Chrome.
3. Ative “Modo do desenvolvedor”.
4. Clique em “Carregar sem compactação”.
5. Selecione a pasta fennix-v3.
6. Clique no ícone da extensão para abrir o painel lateral.

CONFIGURAÇÃO RÁPIDA
1. No cartão GitHub, clique em “Criar token”.
2. Crie um Fine-grained Personal Access Token.
3. Em Repository access, libere os repositórios que o Fennix poderá alterar.
4. Em Repository permissions, configure Contents como Read and write.
5. Cole o token no Fennix e clique “Autorizar e detectar”.
6. Escolha o repositório detectado. A branch principal será preenchida automaticamente.
7. Abra o projeto correspondente no Lovable e clique “Vincular preview”.
8. Clique em “Diagnóstico”. GitHub e repositório devem ficar verdes. Lovable é recomendado para preview, mas não é necessário para criar o commit.

COMO USAR
1. Escreva a solicitação na caixa principal.
2. Deixe “Revisar antes do commit” ligado para confirmar os arquivos antes do envio.
3. Clique “Executar”.
4. O Fennix lê os arquivos relevantes do GitHub, entrega o contexto ao ChatGPT e valida a resposta.
5. Revise e aprove.
6. O commit é criado no GitHub.
7. Se “Abrir preview após commit” estiver ligado, o projeto Lovable é aberto para receber o commit pelo Git Sync.

SEGURANÇA
- O token não é enviado ao ChatGPT nem ao Lovable.
- O token fica no chrome.storage.session por padrão e é apagado quando o Chrome é encerrado.
- Se “Manter autorização” estiver marcado, o token fica no armazenamento local da extensão.
- O armazenamento é restrito a contextos confiáveis da extensão; content scripts das páginas não recebem acesso direto ao token.
- .env, .git, node_modules, .github/workflows e arquivos de credenciais conhecidos são bloqueados.
- Antes do commit, o Fennix confirma se cada arquivo continua na mesma versão revisada.

ARQUITETURA
ChatGPT = gera a proposta de arquivos.
Fennix = valida, revisa, controla conflitos e faz o commit.
GitHub = fonte de verdade.
Lovable = preview do commit pelo Git Sync.

OBSERVAÇÃO IMPORTANTE
A automação do ChatGPT e a detecção visual do Lovable dependem da interface web desses serviços. Se eles alterarem seletores internos, pode ser necessário atualizar content.js.
