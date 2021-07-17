import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {
    return (
        <div className="notes__main-control">

            <NotesAppBar />
            
            <div className="notes__content">

                <input type="text" 
                placeholder="Some awesome title" 
                className="notes__title-input"
                autoComplete="off" />

                <textarea placeholder="What happened today" className="notes__textarea"></textarea>

                <div className="notes__image">
                    <img src="https://isenacode.com/wp-content/uploads/2020/09/wallpaper-iphone-w39-2-scaled.jpg" alt="Imagen" />
                </div>

            </div>
        </div>
    )
}
