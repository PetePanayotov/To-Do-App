import React , {useState , useEffect , useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import InputContainer from '../../components/form-input-div';
import InputField from '../../components/form-input-field';
import labelsObj from '../../components/label';
import buttonsObj from '../../components/button';
import handlers from '../../utils/form-handlers';

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
    const {user: {userId}} = context;


    return (
        <PageWrapper withVideo={false}>
            <Form>

                <InputContainer>
                    <FormLabel>Activity</FormLabel>
                    <InputField
                        value={activity} 
                        placeholder='What do you feel like doing?' 
                        onChange={e => handleChange(e , state , setState , 'activity')}
                        
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>Location</FormLabel>
                    <InputField 
                        value={location} 
                        placeholder='When are you going to do it?'
                        onChange={e => handleChange(e , state , setState , 'location')}
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>Date</FormLabel>
                    <InputField
                        value={date} 
                        placeholder='17/07/2020'
                        onChange={e => handleChange(e , state , setState , 'date')}
                    />
                </InputContainer>

                <InputContainer>
                    <FormLabel>Time</FormLabel>
                    <InputField 
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