import styled from 'styled-components'

export const Container = styled.ul`
    width:14rem;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;    
    top:0;
    background-color:#4e73df;
    background-image:linear-gradient( 180deg, #4e73df 10%, #224abe 100% );
    position:fixed;
    overflow-x:hidden;
    overflow-y:auto;
    list-style: none;
    i.sectionTitle{
        width:100%;
        margin-top:.3rem;
        padding: 0 1rem;
        font-weight: 800;
        font-size: .75rem;
        color:rgb(143, 158, 229);
    }
`

export const SideBarTitle = styled.a`
    color: #fff;
    height: 4.375rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    padding: 1.5rem 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .06rem;
    z-index: 1;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    :hover{
        svg{
            animation: rotate-center 0.6s;
        }
    
    }
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
`

export const SideBarBrandIcon = styled.div`
    width:2rem;
    height:2rem;
    transform: rotate(-15deg);
`

export const SideBarBrandText = styled.div`
    display:inline;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const SideBarLink = styled.li`
    a {
        text-decoration:none;
        display: block;
        width: 100%;
        text-align: left;
        padding: 1rem;
        width: 14rem;
        color:#9ac5f3;
        cursor:pointer;
    }
    span.navLink{
        font-size: 1rem;
        display: inline;
        transition: .3s ease;
    }
    svg {
        margin-right:.5rem;
        color:#7e98e7;
        transition: .3s ease
    }
    .on,.on > svg {
        color:#fff!important;
    }
    :hover,
    :focus {
        svg,span.navLink {
            color:#fff;
        }
    }
`