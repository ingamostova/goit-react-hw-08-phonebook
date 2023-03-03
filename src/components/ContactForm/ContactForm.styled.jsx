import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  display: block;
  padding: 5px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: #2a2a2a;
`;

export const Label = styled.label`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: #2a2a2a;
`;

export const Error = styled.div`
  font-size: 15px;
  padding: 5px;
  color: red;
`;

export const Btn = styled.button`
  width: 150px;
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  transition: all 250ms ease-out;

  :hover,
  :focus {
    outline: 1px solid #2a2a2a;
    cursor: pointer;
    color: #fff;
    background-color: #1976d2;
    outline: none;
  }
`;
