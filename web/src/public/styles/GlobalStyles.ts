import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root{
     --primary:#4e73df;
     --secundary:#526fc1;
     --grey:#5a5c69 ;
     --sucess:#27ae60;
   }
   
    @font-face {
        font-family: Ubuntu300 ;
        src: url( './src/assets/fonts/Ubuntu-Regular.ttf' );
        font-family: Ubuntu700 ;
        src: url( './src/assets/fonts/Ubuntu-Bold.ttf' );
      }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Ubuntu300
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
    background-color:#fff;
    overflow:hidden;
  }
  sup{
    top: -.5rem;
    left: .5rem;
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }
  hr.sliceDivider{
    margin: 0 1rem 1rem;
    width: 90%;
    border: .5px solid #6888e4;
    border-radius: 6px;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  }
  ul::-webkit-scrollbar {
  width: .25em;
}
 
ul::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
ul::-webkit-scrollbar-thumb {
  background-color: #6888e4;
  outline: 1px solid slategrey;
}
#AplicationContent{
  width: calc(100% - 14rem);
  height:calc(100vh - 3rem );
  margin-left:14rem;
  margin-top: -1.5rem;
}
button.btn{
        cursor:pointer;
        display:inline-block;
        padding: .25rem .5rem;
        font-size: .875rem;
        line-height: 1.5;
        border-radius: .2rem;
        color: #fff;
        background-color: #4e73df;
        border-color: #4e73df;
        border: 1px solid transparent;
        outline:none;
        box-shadow: 0 .125rem .25rem 0 rgba(58,59,69,.2) !important;
        transition:ease .5s;
        :hover,
        :focus {
          background:var(--secundary);
        }
    }
    .LineChart{
      width: 100%;
      height:400px;
    }
    .recharts-legend-item-text{
      color:#000
    }
    .LineChart, .shadown {
      box-shadow: 1px 5px 30px 6px rgba(0,0,0,0.07);
      border-radius:10px;
    }
    h1.title {
      color:grey;
      font-size:3rem;
      margin-bottom: 1rem;
    }
`