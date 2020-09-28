 # # define a imagem base 
# para produção, é usado apenas para criar imagem base
# os arquivos estáticos de Html e javascript 
# como o react cria arquivos estáticos de html e js após a compilação 
# estes são o que será servido pelo nginx 
# use alias build para ser mais fácil consultar esse contêiner em outro lugar 
# por exemplo, dentro do container nginx 
FROM node:alpine as build
# definir diretório de trabalho 
# é a pasta de trabalho no contêiner 
# do qual o aplicativo será executado a partir do 
WORKDIR /app
# copie tudo para /app No diretório 
#, ao contrário do dev, no prod, tudo é copiado para o docker 
COPY . /app
# adicione a pasta node_modules a $ PATH 
ENV PATH /app/node_modules/.bin:$PATH
# dependências de instalação e cache 
RUN yarn install
#build do projeto para produção
RUN yarn build

# configure ambiente de produção 
# a imagem base é uma imagem nginx baseada em alpine 
FROM nginx:alpine
# copie a pasta build de reaja à raiz do nginx ( www) 
COPY --from=build /app/build /usr/share/nginx/html
# É você precisa sobrescrever as configurações padrão do nginx 
# remover o arquivo de configuração padrão do nginx 
RUN rm /etc/nginx/conf.d/default.conf
# substituir pelo personalizado 
COPY nginx.conf /etc/nginx/conf.d
# --------- / somente para aqueles que usam o react router ---------- 
# expondo a porta 80
  
# start nginx 
CMD ["nginx", "-g", "daemon off;"] 







