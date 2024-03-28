import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';

export const SmlPageMain = styled(Stack)`
  width: 100%;
`;

export const SmlPageCharts = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${theme.spacing(5)};
  overflow-x: auto;
  padding-bottom: 10px;

  // ${theme.breakpoints.down('xl')} {
  //   grid-template-columns: 1fr 1fr;
  // }
  // ${theme.breakpoints.down('sm')} {
  //   grid-template-columns: 1fr;
  // }
`}
`;

export const SmlPageFilter = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
        border-radius: 4px;
        border: 1px solid ${theme.palette.common.black}20;
        padding: ${theme.spacing(5)};
    `}
`;

export const SmlPageFilterActions = styled(Stack)<{
  theme?: Theme;
}>`
  ${({ theme }) => `
      justify-content: flex-end;
      & > * {
        min-width: 100px;
      }

      ${theme.breakpoints.down('sm')} {
        display: grid;
        grid-template-columns: 1fr;
        gap: ${theme.spacing(5)};
      } 
  `}
`;

export const SMLPageFilterContainer = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacing(5)};

    ${theme.breakpoints.down('xl')} {
      grid-template-columns: 1fr 1fr;
    }

    ${theme.breakpoints.down('lg')} {
      grid-template-columns: repeat(4, 1fr);
    }
    
    ${theme.breakpoints.down('lg')} {
      grid-template-columns: 1fr 1fr;
    }

    ${theme.breakpoints.down('sm')} {
      grid-template-columns: 1fr;
    }
  `}
`;
