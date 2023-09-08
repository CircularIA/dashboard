// import { Card } from 'react-bootstrap'
import { styled, css} from 'styled-components';

import CardHeader from '@mui/material/CardHeader';

export const CardHeader2 = styled(CardHeader)`
    ${props => props.calc && css`
            background: linear-gradient( rgba(0, 185, 113, 1), rgba(6, 217, 112, 1), rgba(13, 255, 110, 1))
    `}   
`

// export const CardPorcent = styled(Card)`
//     /* Sizes */
//     /* width: 500px; */
//     width: 500px;
//     height: 200px;
//     border-radius: 10px;
//     border: 1px solid #989898;
//     background: #FFF;
//     box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
// `   
//     CardPorcent.Header= styled(Card.Header)`
//         /* Sizes */
//         height: 30%;
//         border: 1px solid #989898;
//         border-radius: 10px 10px 0px 0px;
//         /* Colors */
//         background: #989898;
//         color: white;
//         /* Style */
//         text-transform: uppercase;
//         font-size: 125%;
//         font-style: normal;
//         font-weight: 700;
//         line-height: normal;
//         /* Position */
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         /* padding: 0% 5% 0% 5%; */
//         ${props => props.calc && css`
//             background: linear-gradient( rgba(0, 185, 113, 1), rgba(6, 217, 112, 1), rgba(13, 255, 110, 1))
//         `}
        
//     `
//     CardPorcent.Body = styled(Card.Body)`
//         padding: 0% 5% 0% 5%;
//     `
//     CardPorcent.Text = styled(Card.Text)`
//         color: #000;
//         font-family: 'Roboto';
//         font-size: 20px;
//         font-style: normal;
//         font-weight: 100;
//         line-height: normal;
//         /* Position */
//     `

