import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Button = styled(motion.button)`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    margin: 3px;
    font-size: 14px;
  }
`;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    & > div {
      margin-bottom: 8px;
    }
  }
`;

export const Input = styled(motion.input)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const Textarea = styled(motion.textarea)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height: 100px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const Card = styled(motion.div)`
  background-color: white;
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const PostTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Summary = styled.p`
  font-size: 16px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const AuthorDate = styled.p`
  font-size: 14px;
  color: #999;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
