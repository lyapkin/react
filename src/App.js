import React, { useState, useEffect } from 'react'

import GetData from './components/GetData'
import AddRow from './components/AddRow'
import Table from './components/Table'
import RowInfo from './components/RowInfo'
import Search from './components/Search'
import Loader from './components/Loader'

import {requestData} from './request/requestFunction'


function App() {
    const [data, setData] = useState([])
    const [shownData, setShownData] = useState(data)
    const [sorted, setSorted] = useState({
                                          by: '',
                                          down: false
                                        })
    const [rowInfo, setRowInfo] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setShownData(data)
        setSorted({
            by: '',
            down: false
        })
        setRowInfo(false)
    }, [data])

    const getData = async (event) => {
        setLoading(true)

        try {
            const set = await requestData(event.target.name)

            setData(set)
        } catch (err) {
            setError(err)
        }

        setLoading(false)
    }

    const sortData = (event) => {
        const sortBy = event.target.name
        const setOfData = [...shownData]

        if (sortBy === sorted.by) {
            setOfData.reverse()

            setSorted(prev => ({
                                by: prev.by,
                                down: !prev.down
                              })
            )
        } else {
            setSorted({
                by: sortBy,
                down: true
            })

            if (sortBy === 'id') {
                setOfData.sort( (a, b) => a[sortBy] - b[sortBy] )
            } else {
                setOfData.sort( (a, b) => a[sortBy].localeCompare(b[sortBy]) )
            }
        }

        setShownData(setOfData)
    }

    const search = (request) => {
        setSorted({
                    by: '',
                    down: false
                  })

        if (!request) {
            setShownData(data)
        }

        const filteredData = data.filter(item => Object.values(item).join(' ').toLowerCase().includes(request))
        setShownData(filteredData)
    }

    const addRow = (newRow) => {
        newRow.id = data.reduce((prev, item) => Math.max(prev, item.id), 0) + 1

        setData(prevState => [newRow, ...prevState])
    }

    return (
        <div className="container">
            <GetData getData={getData} />
            {
            error ? error.message :
            loading ? <Loader /> :
            data.length ? 
                (<React.Fragment>
                    <div className="operators">
                        <Search setSearchRequest={search} />
                        <AddRow addRow={addRow} />
                    </div>
                    <Table
                        shownData={shownData}
                        sortData={sortData}
                        sorted={sorted}
                        setRowInfo={setRowInfo} 
                    />
                    {rowInfo ? <RowInfo info={rowInfo} /> : null}
                </React.Fragment>) : 
                <span>Данных нет</span>
            }
        </div>
    )
}

export default App;
