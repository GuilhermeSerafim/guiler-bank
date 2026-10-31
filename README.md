# [GuilerBank](https://moni-bank-flame.vercel.app/) 🏦

Estudo de front-end com HTML, CSS e JavaScript que simula um cadastro em etapas, com validação de campos e captura de foto pela câmera do navegador. Não é um banco operacional nem um sistema de autenticação biométrica.

## Fluxo de cadastro

1. Preencher nome, e-mail, RG, CPF e data de nascimento e aceitar os termos da interface.
2. Autorizar a câmera e capturar uma foto.
3. Avançar para a tela de conclusão da demonstração.

O formulário usa validações do HTML e mensagens em JavaScript. Há verificação de dígitos do CPF e de idade a partir de 18 anos. A validação do CPF é matemática: não consulta um cadastro oficial nem confirma identidade. O RG é obrigatório, mas não possui regra de comprimento mínimo nesse campo.

## Captura de foto e armazenamento

`js/cadastro/camera.js` usa `getUserMedia`, desenha o vídeo em um `canvas` e converte a imagem para JPEG em uma URL de dados. Esse fluxo captura uma foto; não compara rostos nem realiza reconhecimento facial.

O cadastro salva nome, e-mail, CPF, nascimento e aceite dos termos em `localStorage`, na chave `cadastro`. A etapa da câmera acrescenta a imagem ao mesmo registro. O RG preenchido não é incluído nesse objeto. Os dados permanecem no armazenamento do navegador até serem removidos; use apenas dados fictícios na demonstração e remova a chave `cadastro` ao terminar. Esse armazenamento não representa uma conta bancária ou uma proteção para dados sensíveis.

## Organização

- `index.html`: página inicial.
- `pages/`: páginas de cadastro e acesso.
- `js/cadastro/index.js`: eventos, mensagens e armazenamento do formulário.
- `js/cadastro/valida-cpf.js` e `valida-idade.js`: validações específicas.
- `js/cadastro/camera.js`: captura e armazenamento da foto.
- `styles/` e `img/`: estilos e recursos visuais.

## Visualização

[Acesse a demonstração](https://moni-bank-flame.vercel.app/).

Para exploração local, sirva a pasta com um servidor estático e abra `index.html` no navegador. O projeto não possui etapa de build. O formulário carrega módulos JavaScript, fontes do Google e estilos de CDN; a câmera depende da permissão e das condições de acesso exigidas pelo navegador.

## Aprendizados

- HTML e CSS para composição de interfaces.
- JavaScript para validações, eventos e mensagens de erro.
- Integração de módulos.
- APIs do navegador para câmera, canvas e armazenamento local.

## Referência visual

![Referência visual](https://cdn.dribbble.com/users/2287419/screenshots/15663694/media/74936224354b5bace24995f237dd5d06.gif)
