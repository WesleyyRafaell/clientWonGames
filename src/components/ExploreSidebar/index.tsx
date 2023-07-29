import Heading from 'components/Heading'
import * as S from './styles'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import Button from 'components/Button'
import { useState } from 'react'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

type Value = {
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Value
  onFilter: (values: Value) => void
}

const ExploreSidebar = ({
  onFilter,
  items,
  initialValues = {}
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)

  const handleChanges = (name: string, value: string | boolean) => {
    setValues((values) => ({ ...values, [name]: value }))
  }

  const handleFilter = () => {
    onFilter(values)
  }

  return (
    <S.Wrapper>
      {items.map((item) => (
        <div key={item.title}>
          <Heading lineBottom lineColor="secondary" size="small">
            {item.title}
          </Heading>

          {item.type === 'checkbox' &&
            item.fields.map((field) => (
              <Checkbox
                key={field.label}
                name={field.name}
                labelFor={field.name}
                label={field.label}
                isChecked={!!values[field.name]}
                onCheck={(value) => handleChanges(field.name, value)}
              />
            ))}

          {item.type === 'radio' &&
            item.fields.map((field) => (
              <Radio
                key={field.label}
                id={field.name}
                name={item.name}
                label={field.label}
                labelFor={field.name}
                value={field.name}
                defaultChecked={field.name === values[item.name]}
                onChange={() => handleChanges(item.name, field.name)}
              />
            ))}
        </div>
      ))}
      <Button fullWidth size="medium" onClick={handleFilter}>
        Filter
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
