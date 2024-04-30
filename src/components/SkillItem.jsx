

export default function SkillItem(props) {

    const att = ()=>{
        alert('Attempting to add skill...')
    }
  return (
    <>
        <button onClick={att}>
            <div className="w-96 bg-slate-200 rounded text-center p-3">{props.name}</div>
        </button>
    </>
  )
}
