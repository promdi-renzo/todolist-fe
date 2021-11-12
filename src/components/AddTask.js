function AddTask({ cancelAddTask }) {

  return (
    <div className="add-task" style={addStyle}>
      <form style={formStyle}>
        <div className="input-group" style={inputGroupStyle}>
          <input type="text" style={inputStyle} placeholder="Add Task Title" />
          <textarea style={inputStyle} placeholder="Add Task Description"></textarea>
        </div>
        <div className="button-group" style={buttonGroupStyle}>
            <button style={cancelButton} onClick={cancelAddTask}>Cancel</button>
            <button style={submitButton} type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
}
const addStyle = {
  width: '100%',
  borderBottom: '2px solid #000',
  backgroundColor: 'rgba(255,255,255,.5)',
  
}
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '1rem',
  gap: '.5rem',
}
const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
  gap: '.3rem'
}
const buttonGroupStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}
const inputStyle = {
  width: '100%',
  padding: '.5rem'
}
const submitButton = {
  backgroundColor: '#000',
  padding: '.3rem .5rem',
  color: '#fff',
  border: 'none',

}
const cancelButton = {
  backgroundColor: '#fff',
  padding: '.3rem .5rem',
  color: '#000',
  border: '1px solid #000',

}
export default AddTask;
