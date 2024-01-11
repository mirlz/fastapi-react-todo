import '../assets/styles/error.scss';

const Error = ({ error }) => {
  return (
    <div class="error-500" data-text={error}>
      <spaguetti>
        <fork></fork>
        <meat></meat>
        <pasta></pasta>
        <plate></plate>
      </spaguetti>
    </div>
  )
}

export default Error;