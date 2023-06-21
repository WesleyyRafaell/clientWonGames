import Heading from 'components/Heading'
import * as S from './styles'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import Button from 'components/Button'

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

export type ExploreSidebarProps = {
  items: ItemProps[]
}

const ExploreSidebar = ({ items }: ExploreSidebarProps) => (
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
            />
          ))}
      </div>
    ))}
    <Button fullWidth size="medium">
      Filter
    </Button>
  </S.Wrapper>
)

export default ExploreSidebar
