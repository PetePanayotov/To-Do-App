import React , {useState , useEffect , useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import containersObj from '../../components/container';
import inputsObj from '../../components/input';
import labelsObj from '../../components/label';
import buttonsObj from '../../components/button';
import handlers from '../../utils/form-handlers';
import dictionary from '../../dictionary';


const {InputContainer} = containersObj;
const {FormInput} = inputsObj;
const {FormLabel} = labelsObj;
const {SubmitButton} = buttonsObj;
const {handleChange , addActivity} = handlers;

const AddPage = () => {

    const initialState = {
        activity: '',
        location: '',
        date: '',
        time: ''
    };

    const context = useContext(UserContext);
    const history = useHistory();
    const [state , setState] = useState(initialState);

    useEffect(() => {
        document.title = 'Add'
    } , []);

    const {activity , location , date , time} = state;
    const {user: {userId} , language} = context;
    const stringsObj = dictionary[language];

    return (
        <PageWrapper withVideo={false}>
            <Form>

                <InputContainer>
                    <FormLabel>{stringsObj.activity}</FormLabel>
                    <FormInput
                        value={activity} 
                        placeholder='What do you feel like doing?' 
                        onChange={e => handleChange(e , state , setState , 'activity')}
                        
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>{stringsObj.location}</FormLabel>
                    <FormInput 
                        value={location} 
                        placeholder='When are you going to do it?'
                        onChange={e => handleChange(e , state , setState , 'location')}
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>{stringsObj.date}</FormLabel>
                    <FormInput
                        value={date} 
                        placeholder='17/07/2020'
                        onChange={e => handleChange(e , state , setState , 'date')}
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>{stringsObj.time}</FormLabel>
                    <FormInput 
                        value={time} 
                        placeholder='17:17'
                        onChange={e => handleChange(e , state , setState , 'time')}
                    />
                </InputContainer>

                <SubmitButton onClick={e => addActivity(e, history , state , userId)}>
                    Add
                </SubmitButton>

            </Form>
        </PageWrapper>
    );

};


export default AddPage;