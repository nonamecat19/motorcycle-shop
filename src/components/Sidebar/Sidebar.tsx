import './Sidebar.scss'
export const Sidebar = ({filterModel,filterBrand, cardsFilter}: any) => {

    return(
        <div className='Sidebar'>
            <label htmlFor="brandFilter">Марка</label>
            <select
                onChange={() => cardsFilter(filterModel.current.value, filterBrand.current.value)}
                ref={filterBrand}
                defaultValue='All'
                id="brandFilter"
                className="select select-bordered w-full max-w-xs mb-4"
            >
                <option value="All">Всі марки</option>
                <option value="Kawasaki">Kawasaki</option>
                <option value="Honda">Honda</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Yamaha">Yamaha</option>
                <option value="KTM">KTM</option>
            </select>
            <label htmlFor="modelFilter">Модель</label>
            <input
                id="modelFilter"
                type="text"
                placeholder="Ninja 250R"
                className="input w-full max-w-xs"
                ref={filterModel}
                onInput={() => cardsFilter(filterModel.current.value, filterBrand.current.value)}
            />
        </div>
    )
}