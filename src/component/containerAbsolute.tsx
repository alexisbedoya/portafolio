import styled from 'styled-components';

interface IContainerRelativeProps {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Base = styled('div')<IContainerRelativeProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  position: absolute;
`;

const ContainerAbsolute = ({
  width,
  height,
  style,
  children,
}: IContainerRelativeProps) => (
  <Base width={width} height={height} style={style}>
    {children}
  </Base>
);

export default ContainerAbsolute;
