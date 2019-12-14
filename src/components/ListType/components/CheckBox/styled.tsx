import styled from "styled-components";

export const SCheckBoxContainer = styled.div`
  display: inline-flex;
  cursor: pointer;
  position: relative;
  user-select: none;
  margin-right: 20px;

  span {
    color: white;
    font-weight: 200;
    padding: 0.5rem 0.25rem;
  }

  input {
    margin-left: 0;
    height: 25px;
    width: 25px;
    appearance: none;
    background: white;
    border: 1px solid #34495e;
    outline: none;
    transition-duration: 0.3s;
    cursor: pointer;
  }

  input:checked + span::before {
    content: "✓";
    display: block;
    text-align: center;
    color: black;
    position: absolute;
    left: 0.45rem;
    top: 0.25rem;
  }

  input:active {
    border: 0.5px solid grey;
  }
`;
