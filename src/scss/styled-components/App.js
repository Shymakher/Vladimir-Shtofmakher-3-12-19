import styled from "@emotion/styled";

export const AppWrapper = styled("div")`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  transition: all 0.25s linear;
  h1 {
    color: ${props => props.theme.color}; 
  }
  a {
    color: ${props => props.theme.color};
  }
  height: 100vh;
  
  .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.color};
    
    &:hover {
      border-color: #fff;
    }
  }
  .MuiAutocomplete-popupIndicator {
    color: ${props => props.theme.color};
  }
  
  .MuiSwitch-track {
  background-color: ${props => props.theme.color}
  }
`;