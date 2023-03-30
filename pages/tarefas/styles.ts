import styled from "styled-components";

export const ContainerTasks = styled.div`
  margin-top: 50px;
`

export const CountTasks = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;

  .created {
    color: ${props => props.theme['blue-400']};
  }

  .completed {
    color: ${props => props.theme['purple-400']};
  }

  span {
      color: ${props => props.theme["gray-300"]};
      padding: 2px 6px;
      font-size: 12px;
      border-radius: 8px;
      background-color: ${props => props.theme['gray-400']};
      margin-left: 5px;
    }
`

export const Tasks = styled.div`
  margin-top: 20px;
  width: 100%;
  
  .completed-task {
    color: ${props => props.theme['gray-300']};
    text-decoration: line-through;
  }
`

export const Task = styled.div`
  background-color: ${props => props.theme['gray-500']};
  min-height: 75px;
  height: 100%;
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  padding-left: 20px;
  gap: 10px;
  border-radius: 8px;
  border: 1px ${props => props.theme['gray-400']}, solid;
  margin-bottom: 12px;

  div {
    display: flex;
    align-items: center;
  }
`
export const TrashContent = styled.div`
  svg {
    color: ${props => props.theme['gray-300']};
    cursor: pointer;

    &:hover {
      color: ${props => props.theme['red-300']};
    }
  }
`
export const NoTasks = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${props => props.theme['gray-400']};
  color: ${props => props.theme['gray-300']};
  line-height: 22px;
  border-radius: 8px;
  padding: 65px 0;

  img {
    margin-bottom: 15px;
  }

  span {
    font-weight: bold;
  }
`