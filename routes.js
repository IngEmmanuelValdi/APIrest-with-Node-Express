const express = require('express')
const routes = express.Router()

routes.get('/', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM books', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        //console.log(req.body)
        conn.query('INSERT INTO book set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Book inserted!')
        })
    })
})

routes.delete('/:id', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        //console.log(req.body)
        conn.query('DELETE FRoM books WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Book delete!')
        })
    })
})

routes.put('/:id', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
        //console.log(req.body)
        conn.query('UPDATE bookssets ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Book update!')
        })
    })
})

module.exports = routes