import {styled} from 'styled-components'

const Boton = styled.button`
    /* margin: 1%; */
    padding: 2% 5% 2% 5%;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    min-height: max-content;
    min-width: max-content;
    text-align: center;
    background-color: white;
    color: black;
    border: 2px solid;
    border-radius: 0.9rem;
    font-size: medium;
    margin-right: 1%;
    margin-bottom: 2px;
    /* row-gap: 2em; */
`
export const BotonCalcular = styled(Boton)`
    padding: 0.5% 1% 0.5% 1%;
    border-radius: 80px;
    border: 2px solid #989898;
    color: black;
    text-align: center;
    font-family: Roboto;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: capitalize;
    display: flex;
    cursor: pointer;
    align-items: center;
    &:hover{
        background: #4AD256;
        color: white;
    }
    &:active{
        background: #4AD256;
        color: white;
    }
    &.active{
        background: #4AD256;
        color: white;
    }
` 
export const BotonAmbiental = styled(BotonCalcular)`
    border: 2px solid #00B971;
    &:hover{
        background: #00B971;
    }
    &.active{
        background: #00B971;
        color: white;
    }
`
export const BotonEconomico = styled(BotonCalcular)`
    border: 2px solid #F3A430;
    &:hover{
        background: #F3A430;
    }
    &.active{
        background: #F3A430;
        color: white;
    }
`
export const BotonSocial = styled(BotonCalcular)`
    border: 2px solid #2D7DD2;
    &:hover{
        background: #2D7DD2;
    }
    &.active{
        background: #2D7DD2;
        color: white;
    }
`
