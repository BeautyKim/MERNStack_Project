import { Typewriter } from "react-simple-typewriter";

export function Home() {
    return (
        <div className='App'>
    <h1
      style={{ paddingTop: '10rem', margin: 'auto 0', fontWeight: 'normal' }}
    >
      Todo List {' '}
      <span style={{ color: '##008BC6', fontWeight: 'bolder ' }}>
        <Typewriter
          words={['Project']}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          onLoopDone={() => console.log(`Done after 5 loops!`)}
        />
      </span>
    </h1>
  </div>
    )
}