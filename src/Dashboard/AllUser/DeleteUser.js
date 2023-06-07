import React from 'react';

const DeleteUser = ({title, message, closeModel, successAction, modalData,  successButtonName}) => {
    return (
        <div>
        <input type="checkbox" id="confirmation-modal" classNameName="modal-toggle" />
        <div classNameName="modal">
          <div classNameName="modal-box">
            <h3 classNameName="font-bold text-lg">{title}</h3>
            <p classNameName="py-4">{message}</p>
            <div classNameName="modal-action">
              <label onClick={()=>successAction(modalData)} htmlFor="confirmation-modal" classNameName="btn btn-primary">{successButtonName}</label>
              <button onClick={closeModel} classNameName='btn btn-outline btn-success'>Cancel</button>
            </div>
          </div>
        </div>
                </div>
    );
};

export default DeleteUser;