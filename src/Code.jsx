function Card ({planDetails}){
    console.log(planDetails);
    return<>
    <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{planDetails.plan}</h5>
              <h6 className="card-price text-center">${planDetails.price}<span className="period">/month</span></h6>
              <hr/>
              <ul className="fa-ul">
                <li className={planDetails.isUser?"":"text-muted"}><span className="fa-li"><i className={planDetails.isUser?"fas fa-check":"fas fa-times"}></i></span>{planDetails.plan!=="FREE"?<b>{planDetails.plan ==="PRO"?"Unlimited":""} {planDetails.user}</b>:planDetails.user}</li>
                <li className={planDetails.isStorage?"":"text-muted"}><span className="fa-li"><i className={planDetails.isStorage?"fas fa-check":"fas fa-times"}></i></span>{planDetails.storage}</li>
                <li className={planDetails.isPublicProjects?"":"text-muted"}><span className="fa-li"><i className={planDetails.isPublicProjects?"fas fa-check":"fas fa-times"}></i></span>{planDetails.publicProjects}</li>
                <li className={planDetails.isCommunityAccess?"":"text-muted"}><span className="fa-li"><i className={planDetails.isCommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{planDetails.communityAccess}</li>
                <li className={planDetails.isPrivateProjects?"":"text-muted"}><span className="fa-li"><i className={planDetails.isPrivateProjects?"fas fa-check":"fas fa-times"}></i></span>{planDetails.privateProjects}</li>
                <li className={planDetails.isSupport?"":"text-muted"}><span className="fa-li"><i className={planDetails.isSupport?"fas fa-check":"fas fa-times"}></i></span>{planDetails.support}</li>
                <li className={planDetails.isSubdomain?"":"text-muted"}><span className="fa-li"><i className={planDetails.isSubdomain?"fas fa-check":"fas fa-times"}></i></span>{planDetails.plan==="PRO"?<span><b>Unlimited</b> {planDetails.subdomain}</span>:planDetails.subdomain}</li>
                <li className={planDetails.isReports?"":"text-muted"}><span className="fa-li"><i className={planDetails.isReports?"fas fa-check":"fas fa-times"}></i></span>{planDetails.reports}</li>
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
    </>
}

export default Card