import styled from "@emotion/styled";

export const SelectedCityWrapper = styled('div')`
  box-shadow: ${props => `0 3px 6px ${props.theme.boxShadow}, 0 3px 6px ${props.theme.boxShadow};`};
  padding: 20px;
  width: 75%;
  margin: 0 auto;

  .general-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    ul {
      li {
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }

    .favorite {
      cursor: pointer;
      i {
        margin-right: 10px;
      }
    }
  }

  .weather-title {
    display: flex;
    justify-content: center;
    font-size: 22px;
    margin-bottom: 25px;
  }

  .five-days {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .day {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 15px;
      margin-bottom: 10px;
      box-shadow: ${props => `0 1px 3px ${props.theme.boxShadow}, 0 1px 2px ${props.theme.boxShadow};`};
      transition: all ease-in-out .2s;

      & > :not(:last-child){
        margin-bottom: 10px;
      }
 
      &:hover {
        transition: all ease-in-out .3s;
        box-shadow: ${props => `0 7px 14px ${props.theme.boxShadow}, 0 5px 5px ${props.theme.boxShadow};`};
      }
    }
  }

  @media screen and (max-width: 970px) {
    width: 100%;
  }
`;