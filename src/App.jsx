import React from 'react'
import Mood from './component/Mood'
import Loading from './component/Loading';

const App = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return <Loading /> ;
  }
  return (
   <Mood />
  )
}

export default App