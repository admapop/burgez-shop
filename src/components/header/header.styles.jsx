import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'


//Example use of css element from styled components
// const OptionContainerStyles = css`
// padding: 10px 15px;
// cursor: pointer;
// `

export const HeaderContainer = styled.div`
height: 100px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;
img {
  width: 150px;
}
`

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`

//using the as= attribute to change this to div if needed
export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`

//Re-using css element defined in top
// export const OptionLink = styled(Link)`
// ${OptionContainerStyles}
// `

// export const OptionDiv = styled.div`
// ${OptionContainerStyles}
// `
