//  npm install --save-dev webpack webpack-cli webpack-dev-server
//  npm install --save-dev html-webpack-plugin
//  npm install --save-dev mini-css-extract-plugin
//  npm install --save-dev css-minimizer-webpack-plugin
//  npm install --save-dev sass-loader sass
//  npm install --save-dev css-loader
//  npm install --save-dev svg-sprite-loader

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const path = require("path");

module.exports = {
  entry: { 
    style: [
      path.resolve(__dirname, "src/static/scss/", "basic.scss"),
      path.resolve(__dirname, "src/templates/01section.nav/", "nav.scss"),
      path.resolve(__dirname, "src/templates/02section.contact/", "contact.scss"),
      path.resolve(__dirname, "src/templates/03section.form/", "form.scss"),
      path.resolve(__dirname, "src/templates/04section.label/", "label.scss"),
      path.resolve(__dirname, "src/templates/05section.footer/", "footer.scss"),
    ],
    nav: path.resolve(__dirname, "src/templates/01section.nav/"),
    contact: path.resolve(__dirname, "src/templates/02section.contact/"),
    form: path.resolve(__dirname, "src/templates/03section.form/"),
    label: path.resolve(__dirname, "src/templates/04section.label/"), 
    footer: path.resolve(__dirname, "src/templates/05section.footer/"), 
    svg: path.resolve(__dirname, "src/static/img/svg/", "svg.js"),
  },
  output: { 
    path: path.resolve(__dirname, "public"), 
    filename: ({ chunk: { name } }) => {
      return  name === "style" ? "temp/[name].js" : 
              name === "svg" ? "temp/[name].js" : 
              "js/[name][contenthash:8].js";
    },
    clean: true, // Удаление не использующих файлов
  },
  plugins: [
    new HTMLWebpackPlugin({ // HTML - страница
      template: path.resolve(__dirname, "src/pages/", "index.html"), 
      chunks: [
        'nav',
        'contact',
        'form',
        'label',
        'footer',
      ],
      scriptLoading: 'blocking' // Где размещать на странице html тег script
    }),
    new MiniCssExtractPlugin({  // Выделение из js в отдельный файл
      filename: "css/[name].css",
    }),
    new SpriteLoaderPlugin({// Создание SVG 
      plainSprite: true 
    }),
    new CssMinimizerPlugin(), // Оптимизация css
  ],
  module: {
    rules: 
    [{
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
      generator: {
        filename: "fonts/[name][ext]",
      }
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: "img/[name][ext]",
      }
    },
    { // Перевод scss в css
      test: /\.s[ac]ss$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    },
    { // Создание SVG - спрайта
      test: /\.svg$/,
      use: [{
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          outputPath: 'svg/'
        }
      }]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};