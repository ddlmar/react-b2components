import styled from 'styled-components';

export interface IB2Button {
  variant: 'primary' | 'secondary' | 'outline' | 'transparent';
}

export const B2Button = styled.button<IB2Button>`
  background-color: ${(props) =>
    props.variant === 'primary'
      ? props.theme.colors.main
      : props.variant === 'secondary'
      ? props.theme.colors.secondary
      : 'transparent'};
  color: ${(props) =>
    props.variant === 'primary'
      ? props.theme.colors.buttonText.primary
      : props.variant === 'secondary'
      ? props.theme.colors.buttonText.secondary
      : props.variant === 'outline'
      ? props.theme.colors.buttonText.outline
      : props.theme.colors.buttonText.text};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: 16px;
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) =>
    props.variant === 'outline'
      ? `1px solid ${props.theme.colors.main}`
      : 'none'};
  padding: 10px;
  transition: opacity 0.25s ease-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
