import ReactNoSleep from 'react-no-sleep';

const FlagPart = ({ color }) => {

  return (
    <div style={{
      background: color,
      position: 'fixed',
      top: 0, right: 0, bottom: 0, left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <ReactNoSleep>
        {({ isOn, enable, disable }) => (
          <>
            <input
              id="nosleep"
              type="checkbox"
              onClick={isOn ? disable : enable}
              checked={isOn}
            />
            <label htmlFor="nosleep">Maradj ébren</label>
          </>
        )}
      </ReactNoSleep>      
    </div>
  )
}

export default FlagPart

export const getServerSideProps = ({ query }) => {
  const color = (
    query.hol === 'elol' ? '#ff0c1d' :
    query.hol === 'kozepen' ? '#FFFFFF' :
    '#17ca27'
  )

  return {
    props: { color }
  }
}