# Webpack-React configuration

Comandos iniciales:

    npm i react react-dom -S  
    
-S es para dependencias globales.
    
    npm init -y 
    
-y Para iniciar con valores por default.

Para empezar, creamos carpeta index.js y src/components/App.jsx

Ademas, en la carpeta public creamos index.html (desde aqui react extiende su virtual Dom).

    Diferencia entre un plugin y un loader
    Es importante saber la diferencia entre un plugin y un loader, ya que estos no son sinónimos. 
    El plugin es código que es capaz de modificar la compilación, como en     el caso de Babel, el 
    cual transpila el código, modificando la compilación.
    .
    Por otro lado, el loader funciona antes de que se haga la compilación, por lo que no afecta a esta. 
    Sabiendo eso, el plugin es mucho mas difícil de manejar que un loader (en relacion al mantenimiento).

Creamos webpack.config.js:

1. Instalamos:
    @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/plugin-transform-runtime -D
    
Creamos la carpeta .babelrc y agregamos el objeto con los presets a utilizar: 

    preset-env -para utilizar javascript en su última version ecmaScript. 
    
    ppreset-env-react -para compilar react a vanilla javascript). 
    
    Agregamos tambien plugin-transform-runtime para utilizar async-await

2. Instalamos:
    webpack webpack-cli webpack-dev-server -D

## Configuración de plugins y loaders para React:

    1 Instalamos html-loader html-webpack-plugin -D 
      Para poder trabajar con html y los configuramos en webpack.config.js
      Primero agregamos html-loader en module.rules -como una nueva regla- y luego agregamos en "plugins" => 
      new HtmlWebpackPlugin con su configuracion interna.

    2 Creamos los script:
            "start": "webpack-dev-server",
            "build": "webpack --mode production" 

## Configuración de Webpack para CSS en React:

    1 Instalamos mini-css-extract-plugin css-loader style-loader sass sass-loader -D
      Luego configuramos loader y plugin en webpack.config.js
      Creamos styles/global.scss y la importamos en index.js

## Optimización de Webpack para React:

    1 Instalamos css-minimizer-webpack-plugin terser-webpack-plugin clean-webpack-plugin
    2 Creamos webpack.config.dev.js => Aqui agregamos mode:"development", 
    3 Quitamos devServer de webpack.config.js => Aqui agregamos "alias" para acceder a las 
    carpetas components y styles. ya que no lo utilizaremos y agregamos las optimizaciones recien instaladas.
      
    Optimización: hashes, compresión y minificación de archivos:
    css-minimizer-webpack-plugin  -Para css
    terser-webpack-plugin -D      -Para js
    clean-webpack-plugin -D       -Este plugin limpia las versiones hasheadas anteriores, es decir tendremos 
    un main.js o   build.js, por ej, por cada npm run build.
    
    4 Agregamos los scripts:
        "start": "webpack-dev-server --config webpack.config.dev.js",
        "build": "webpack --config webpack.config.js", 


    
