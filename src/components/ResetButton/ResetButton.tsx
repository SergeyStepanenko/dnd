import React from 'react';
import { palette } from '@/constants';
import ResetIcon from '../Icons/Reset';
import * as S from './ResetButton.styled';

interface IResetButtonProps {
  onClick: () => void;
  isError?: boolean;
}

const ResetButton: React.FC<IResetButtonProps> = (props) => {
  const { onClick, isError } = props;

  return (
    <S.Reset onClick={onClick}>
      <ResetIcon {...(isError && { fill: palette.red })} />
    </S.Reset>
  );
};

export default ResetButton;
