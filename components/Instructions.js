import RowHeader from "./RowHeader"
import ShortcutRow from "./ShortcutRow"

const Instructions = () => {
  return (
    <>
        <RowHeader title='On any website' />
        <ShortcutRow
            shortcut='B'
            label='Convert Fiat Price to Bitcoin'
        />
        <ShortcutRow
            shortcut='S'
            label='Convert Fiat Price to Sats'
        />
        
        <RowHeader title='On Twitter' />
        <ShortcutRow
            shortcut='D'
            label='Convert Tweet Date to Bitcoin Price'
        />
    </>
  )
}

export default Instructions