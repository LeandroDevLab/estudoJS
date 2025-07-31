# NPM

`npm init -y`
Inicializar o pack NPM

`npm install express` // ou nome do pacote que deseja intalar
instalou em dependencies

`npm update` // atualizar os pacotes
mover para dev dependencies (exemplos webpack e babel) pacotes de desenvolvimento

`npm install express –save-dev` (para instalar em dev dependencies)

`npm install express –save-prod` (voltar para dependencies)
instalando versão específica

`npm install express@2.1.0 -E` (o -E para evitar a flag ^ que irá atualizar automaticamente)

`npm uninstall express` (desinstalar um pacote)

`npm ls` (para listar os pacotes instalados, mas aqui fez igual sem o --depht=0)

`npm ls --depht=0` (para ver só os que instalou)
npm outdated (ver quais estão desatualizados, se não houver não mostra nada)

## Significado dos números de atualização

2.1.0
o primeiro número é o Major, o segundo o Minor, o terceiro o Patch
Patch(para correções de bugs)
Minor (funcionalidades)
Major (maior, pode gerar incompatibilidade com Minors anteriores)
^ pode atualizar tanto a Minor como a Patch
~ pode atualizar somente a Patch (mas não faz sentido, melhor a ^)
