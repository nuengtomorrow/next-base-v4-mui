import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Head from 'next/head'
import theme from '../components/Theme';

const useStyles = makeStyles((theme: Theme) => ({
  root:{
    padding: 10,
  },
}))

const Home: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Head>
        <title>Next V4.mui</title>
        <meta name="description" content="Next V4.mui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
    <h1 style={{display: "flex", justifyContent: "center"}}>Welcome to Next V4.mui</h1>
    </main>
    </div>
  )
}

export default Home
