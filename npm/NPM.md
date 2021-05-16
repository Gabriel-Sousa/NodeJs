## NPM
---
- verificar se temos o npm instalado `npm -v`
- `npm init` inicia o `package.json` mostra no console configurações para o pacote
- `npm init -y` ele no console da "yes" para tudo, e cria um arquivo 'package.jon' sem precisa configura-lo e no arquivo podemos modificar as configurações no vs code em vez do console

## Package.jon
---
- É um arquivo no formato .json(JavaScript Object Notation), aonde fica as "configurações"

## Módulos de terceiros
---
-npm install `"e o nome do módulo sem as aspas"`
-npm i `"e o nome do módulo sem as aspas"`

## Dependências de desenvolvimento
---
- `npm i cfonts -D` esse `-D` e uma opção que passa para a instalção que essa dependências e somente para desenvolvimento, so vai ultilizar essa quando estiver em um ambiente de desenvolvimento, ou seja quando alguem precisar utilizar esse "pacote/módulo" não ira precisa instalar essa devDependencies

- `npm update` remapear tudo que esta no `package-lock.json` caso você altere as devDependencies para dependencies ou vice-versa no `package.json`

## node_modules
---
- Ele é a pasta onde fica os Módulos

# **Importante** 
Com o tempo a pasta `node_modules` fica cheia de arquivo cause use git deve cria um `.gitignore` e colocar dentro do arquivo `node_modules/` para não enviar o arquivos por github.

Quando a pessoa pega o seu projeto e só digitar `npm install` ou `npm i` para instala os arquivos ele conseguer sabe quais são os arquivos pela o `package.json`.

# **package-lock.json**

- **Fique longe desse arquivo**, pois ele faz um mapeamento de todas as suas dependências.

## scripts

- Nele você pode coloca um `"start": "node index.js"` esse comando inicia um arquivo, o start pode ser qualque palavara mais o start e especial pois ele voce não precisa digita npm run start para executa só precisa npm start.

- O script fica no package.json na parte `"scripts":{}` nele vem padrão o     `"test": "echo \"Error: no test specified\" && exit 1` você pode apagar e coloca o start.

## Dependências globais 
- As dependências globais são instalas para todos os projetos, mas não é instalado no proejto é instalada no computador.

- `npm i cfonts -g` esse `-g` fala que vai instala na máquina para saber onde foi instalado digita ->
- `npm root -g` ele vai fala a pasta onde esta os arquivos.

- `npm list` para ver quais módulos estão os projetos.
- `npm list -g` para ver quais módulos instalados na máquina.

- `npm uninstall cfonts` para  desinstalar o módulo no projetos.

- `npm uninstall cfonts -g`para  desinstalar o módulo na máquina.

## Alterando as versões das dependências

- No `package.json` da para ver a versão do módulos

 `"cfonts": "^2.95.2"`

    major.minor.patch
      2    9      2

`major` -> significa que há possibilidade de quebra o pacote no projeto.

`minor` -> significa que vai ter alteração mas que não há possibilidade quebra o pacote no projeto.

`patch` -> significa que está resolvendo algum bug.

---

`"2.9.2"` -> a versão nunca vai atualizar.

`"X2.95.2"` -> aonde esta o `X` sera onde sera colocado os sinais seguintes e esse sinal aparece no `package.json` ->

`*` -> significa que vai atualizar o `major`, `minor` e `patch`

`^` -> o npm sempre que atualizar e sempre ira atualizar o `minor` e `patch`

`~` -> o npm ira atualizar só o `patch`.

---

Para instala algumas versão especifica precisa digitar `npm i cfonts@"x"` no local do `x` sem aspas voce colocar a versão exemplo -> 

`npm i cfonts@1.20.5`

`npm outdated` -> mostra os pacotes e qual é a versão atual, a versão que ele quer e a última versão do pacote.

`npm upgrade` -> atualizar a versão `Current` para `Wanted` do `npm outdated`.

Essa versão que ele `quer` esta no `package.json`.


`npm i cfonts@latest` -> esse comando instala a última versão de algum pacote.
