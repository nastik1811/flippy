import {useFormik} from 'formik'
import {FormEvent, useState} from 'react'
import {BaseCardDetails, CardSide, Collection} from '../../types'
import {SubmitButton} from '../common'
import Typography from '../Typography'
import {
    Card,
    CardContent,
    CollectionSelect,
    CollectionSelectWrapper,
    SaveButton,
    SideView,
    StyledForm,
    TurnCard,
} from './styled'

type CardFromPropsType = {
    initialDetails: BaseCardDetails
    collections: Collection[]
    onSubmit: (details: BaseCardDetails) => void
}

const CardForm = ({
    initialDetails,
    collections,
    onSubmit,
}: CardFromPropsType) => {
    const [targetSide, setTargetSide] = useState<CardSide>('front')

    const flipSide = () => {
        setTargetSide(current => (current === 'front' ? 'back' : 'front'))
    }

    const formik = useFormik<BaseCardDetails>({
        initialValues: initialDetails,
        onSubmit: onSubmit,
    })

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <Card side={targetSide}>
                <SideView side='front'>
                    <CardContent
                        name='front'
                        value={formik.values.front}
                        onChange={formik.handleChange}
                    />
                </SideView>
                <SideView side='back'>
                    <CardContent
                        name='back'
                        value={formik.values.back}
                        onChange={formik.handleChange}
                    />
                </SideView>
            </Card>
            <TurnCard type='button' onClick={flipSide}>
                Turn side
            </TurnCard>
            <CollectionSelectWrapper>
                <Typography>Choose a collection</Typography>
                <CollectionSelect
                    name='collection_id'
                    value={formik.values.collection_id}
                    onChange={formik.handleChange}>
                    {collections.map(c => (
                        <option value={c.id} key={c.id}>
                            {c.name}
                        </option>
                    ))}
                </CollectionSelect>
            </CollectionSelectWrapper>
            <SaveButton as='button' type='submit'>
                <Typography>Save</Typography>
            </SaveButton>
        </StyledForm>
    )
}
export default CardForm
