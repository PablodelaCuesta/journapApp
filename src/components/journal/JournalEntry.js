import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
            <div className="journal__entry-picture" style={ {
                backgroundSize: 'cover',
                backgroundImage: 'url(https://free-profile-pics.com/profile-pictures/01232014/download/eagle-profile-picture-360x360.png)'
            } }>

            </div>

            <div className="journal__entry-body">

                <p className="journal__entry-title">
                    Información del título
                </p>
                <p className="journal__entry-content">
                    Contenido
                </p>

            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
