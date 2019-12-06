import styled from "@emotion/styled";

export const NavbarWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  box-shadow: ${props => `0 3px 6px ${props.theme.boxShadow}, 0 3px 6px ${props.theme.boxShadow};`};

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
    span {
    cursor: pointer;
    }

      &:nth-of-type(2){
        width: 100px;
      }

      &:not(:last-child) {
        margin-right: 10px;
      }

      .is-active {
        color: ${props => props.theme.anchor};
      }
    }
  }
`;