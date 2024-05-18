import React from 'react';
import Loader from './Loader.tsx';

interface WithLoaderProps {
  loading: boolean;
}

const withLoader = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  return (props: P & WithLoaderProps) => {
    const {loading, ...otherProps} = props;

    if (loading) {
      return <Loader />;
    }

    return <WrappedComponent {...(otherProps as P)} />;
  };
};

export default withLoader;
