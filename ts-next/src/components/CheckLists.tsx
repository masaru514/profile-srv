import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const grid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
}

type Selectors = {
  select: string
  name: string
  id: string
}

export default function CheckLists(props: {
  array: Selectors[],
  addCheckedElement: (e: HTMLINputElement) => void
}) {
  const { array, addCheckedElement } = props
  return (
    <FormControl>
      <FormGroup style={grid}>
        {array.map(({ select, name, id }) => (
          <FormControlLabel
            control={<Checkbox name={name} value={select} />}
            label={select}
            key={id}
            onChange={(e) => {
              const el = e.target as HTMLInputElement
              addCheckedElement(el)
            }}
          />
        ))}
      </FormGroup>
    </FormControl>
  )
}