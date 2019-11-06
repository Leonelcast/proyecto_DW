const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports =
    {
        entry: './js/app.js',
        output: {
            path: __dirname + '/build',
            filename: 'bundle.js'
        },
        module: {
            rules: [
              {
                test: /\.s[ac]ss$/i,
            use: [
          
              MiniCssExtractPlugin.loader,
             
              'css-loader',
             
              'sass-loader',
                ],
              },
              
            ],
            
          },

        plugins: [
          new MiniCssExtractPlugin({
            filename: 'style.css'
          }),
          new HtmlWebpackPlugin({
            filename: 'adminUser.html',
            template: 'adminUser.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'articuloApple.html',
            template: 'ArticuloApple.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'articuloNintendo.html',
            template: 'articuloNintendo.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'articuloTesla.html',
            template: 'articuloTesla.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'authorUser.html',
            template: 'authorUser.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'categoriaX.html',
            template: 'categoriaX.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'categoriaY.html',
            template: 'categoriaY.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'crearArticulo.html',
            template: 'crearArticulo.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'crearArticulo2.html',
            template: 'crearArticulo2.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'crearArticulo3.html',
            template: 'crearArticulo3.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'signIn.html',
            template: 'signIn.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'signUp.html',
            template: 'signUp.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'loginUser.html',
            template: 'loginUser.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'moderatorUser.html',
            template: 'moderatorUser.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'moduloModerator.html',
            template: 'moduloModerator.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'subCategoriaX.html',
            template: 'subCategoriax.html'
          }), 
          new HtmlWebpackPlugin({
            filename: 'subCategoriaY.html',
            template: 'subCategoriaY.html'
          }), 
          
         
        ]
    }