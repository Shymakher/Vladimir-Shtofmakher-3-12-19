import styled from "@emotion/styled";

export const FavoritesWrapper = styled('ul')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  max-width: 75%;
  margin: 0 auto;

  li {
    display: flex;
    flex-direction: column;
    transition: all ease-in-out .2s;
    box-shadow: ${props => `0 1px 3px ${props.theme.boxShadow}, 0 1px 2px ${props.theme.boxShadow};`};
    padding: 20px;
    cursor: pointer;

    & > :not(:last-child){
      margin-bottom: 10px;
    }

    &:hover {
      transition: all ease-in-out .3s;
      box-shadow: ${props => `0 7px 14px ${props.theme.boxShadow}, 0 5px 5px ${props.theme.boxShadow};`};
    }
  }
`;