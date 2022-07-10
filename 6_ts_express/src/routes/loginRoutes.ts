import { Router, Request, Response } from 'express'

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

const router = Router();
router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password"/>
      </div>
      <button>submit</button>
    </form>
  `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body

  if(email && password && email === 'hi@hi.com' && password === 'password'){
    // mark person as logged in
    req.session = { loggedIn: true }
    res.redirect('/')
    // redirect them to root route
  } else{
    res.send('invalid email or password')
  }
})

router.get('/', (req: Request, res: Response) => {
  if(req.session && req.session.loggedIn){
    res.send(`
      <div>
        <div>you are logged in</div>
        <a href='/logout'> logout </a>
      </div>
    `)
  } else{
    res.send(`
      <div>
        <div>you are not logged in</div>
        <a href='/login'> login </a>
      </div>
  `)
  }
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/')
})

export { router }