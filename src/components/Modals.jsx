export default ({member, handleClose, handleMember}) => {
  return (
     <dialog id="modal-member" open>
      <article>
        <a href="#close"
        aria-label="Close"
        className="close"
        data-target="modal-member"
        onClick={handleClose}>
        </a>
        <hgroup>
          <div style={{
            display: "flex",
            gap: "1rem",
          }}>
            <img style={{ width: '200px'}} src={`images/${member.slug}.svg`} alt={member.name} />
            <hgroup>
              <h1>{member.name}</h1>
              <p>{member.bio}</p>
              <hgroup>
              <a className="outline" href="#" role="button" 
                onClick={() => {handleMember(Number(member.id) + 1)}}>{`next`}</a>
              <a className="outline" href="#" role="button" 
                onClick={() => {handleMember(Number(member.id) - 1)}}>{`previous`}</a>
              </hgroup>
            </hgroup>
          </div>
        </hgroup>
      </article>
     </dialog>
  )
}