import React , {useState , useEffect , useContext} from 'react';
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import ActivityUnit from '../../components/activity-unit';
import containersObj from '../../components/container';
import buttonsObj from '../../components/button';
import handlers from '../../utils/profile-page-handlers';

const {PageBtnsContainer} = containersObj;
const {PageButton} = buttonsObj;
const {getActivities , changePage , finishActivity} = handlers;


const ProfilePage = () => {

    const context = useContext(UserContext);
    const {user:{username , userId}} = context;
    const [state , setState] = useState([]);
    const [pages , setPages] = useState([]);
    const [startInd , setStartInd] = useState(0);
    

    useEffect(() => {
        
        document.title = username
        
        getActivities(setState, setPages , userId);

    } , [userId , username]);

    const start = startInd * 3;
    const end = start + 3;
    const forRender = state.slice(start , end);


    return (
        <PageWrapper withVideo={false} pageDirection="column">

            {
                forRender.map((obj , i) => {

                    const {_id , activity, location , date , time} = obj;

                    return (

                        <ActivityUnit
                            handler={(e) => finishActivity(e , state , setState , _id)}
                            key={i}
                            id={_id}
                            activity={activity}
                            location={location}
                            date={date}
                            time={time}
                        />

                    )

                })
            }

            <PageBtnsContainer>

                {
                    pages.map((stringBtn , i) => {
                        
                        return (
                        
                            <PageButton isFirst={i === 0} onClick={(e) => changePage(e , setStartInd)} key={i}>
                                {++i}
                            </PageButton>
                        )

                    })
                }

            </PageBtnsContainer>



        </PageWrapper>
    );

};


export default ProfilePage;