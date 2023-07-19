
import React from 'react';
import VerifiedIcon  from '@mui/icons-material/Verified';
const SkillSection = () => {
  const iconstyle={
    fontSize:'1rem',
    color:'#0092ff',
    marginRight:'0.5rem'
  }
  return (
    <>

      <div className="text-center experience">
        <h2 className='glowing-text' >My Experience</h2>
      </div>

      <div className="container mb-10">
        <div className="sec mt-5">
          <h4 className='' >FrontEnd Development</h4>
          <div className="row">
            <div className="col mt-4">
              <div className="d-flex">
                <VerifiedIcon style={iconstyle} />
                <h6 className='ml-4' >HTML</h6>
              </div>
              <h6 className='fs-8' >Experienced</h6>
            </div>
            <div className="col mt-4">
              <div className="d-flex">
                <VerifiedIcon style={iconstyle} />
                <h6 className='ml-4' >Css</h6>
              </div>
              <h6 className='fs-8' >Experienced</h6>
            </div>
          </div>






          <div className="row">
            <div className="col mt-4">
              <div className="d-flex">
                <VerifiedIcon style={iconstyle} />
                <h6 className='ml-4' >JavaScript</h6>
              </div>
              <h6 className='fs-8' >Experienced</h6>
            </div>
            <div className="col mt-4">
              <div className="d-flex">
                <VerifiedIcon style={iconstyle} />
                <h6 className='ml-4' >React</h6>
              </div>
              <h6 className='fs-8' >Experienced</h6>
            </div>
          </div>


          <div className="row">
            <div className="col mt-4">
              <div className="d-flex">
                <VerifiedIcon style={iconstyle} />
                <h6 className='ml-4' >Bootstrap</h6>
              </div>
              <h6 className='fs-8' >Experienced</h6>
            </div>

          </div>
        </div>


        <div className="sec mt-5">
          <h4 className='text-center  ' >BackEnd Development</h4>
          <div className="row">
            <div className="col mt-4">
              <div className="d-flex">
                <VerifiedIcon style={iconstyle} />
                <h6 className='ml-4' >Node Js</h6>
              </div>
              <h6 className='fs-8' >Experienced</h6>
            </div>
            <div className="col mt-4">
              <div className="d-flex">
                <VerifiedIcon style={iconstyle} />
                <h6 className='ml-4' >Express Js</h6>
              </div>
              <h6 className='fs-8' >Experienced</h6>
            </div>
          </div>






          <div className="row">
            <div className="col mt-4">
              <div className="d-flex">
                <VerifiedIcon style={iconstyle} />
                <h6 className='ml-4' >MongoDb</h6>
              </div>
              <h6 className='fs-8' >Experienced</h6>
            </div>
            <div className="col mt-4">
              <div className="d-flex">
                <VerifiedIcon style={iconstyle} />
                <h6 className='ml-4' >MongooseJs</h6>
              </div>
              <h6 className='fs-8' >Experienced</h6>
            </div>
          </div>



        </div>
      </div>

    </>
  );
};
export default SkillSection;