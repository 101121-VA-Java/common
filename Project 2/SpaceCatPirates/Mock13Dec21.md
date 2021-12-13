##MOCK INTERVIEWS
# Interviewee: Dean
# Interviewer: Albert
- Q1: What are Spring Projects and Spring Modules?
- A1: Spring Data would be a module.  
- Q2: What is IOC and what does the IOC Container do?
- A2: Inversion of Control. Responsible for instantiating and handing out dependencies.
- Q3: What is dependency injection and what are some of the benefits of using dependency injection?
- A3: DI is the abstract way of resolving dependencies in our application, essentially taking the guesswork out of logic pathing. What it does for us is it accelerates our software development process by saving us a lot of time and effort. 
- Q4: What types of dependency injection does Spring support?
- A4: Setter, field, constructor injection
- Q5: What are some differences between BeanFactory and ApplicationContext? Which one eagerly instantiates your beans?
- A5: BeanFactory is what we used to call DAO factory. 

# Interviewee: Albert
# Interviewer: Patience
- Q1: ?
- A1: Annotations. @PostMapping etc
- Q2: What is AOP
- A2: Avoid tightly coupling cross cutting concerns
- Q3: What is @Transactional
- A3: You’re telling spring that you are referring to a database transaction
- Q4: What is the difference between JPARepository and CrudRepository
- A4: JPARepository is an interface?? I’d have to look it up in the documentation.
- Q5: What is the benefit of using spring boot profiles?
- A5: One benefit is you can have a dev and production environment that are separated.

# Interviewee: Patience
# Interviewer: Bezza
- Q1: What file would you use to configure Spring?
- A1: application.yml
- Q2: What is @value used for?
- A2: Pointing to a value of a field?
- Q3: Define join point, point cut, and advice
- A3: Before, after a method is executed. Advice to be used. Join point is the actual logic of the implementation. Join point points at the ?
- Q4: What is @Query used for?
- A4: @Query is used for native sql queries
- Q5: What is bean wiring? And @Autowiring?
- A5: @Autowiring is establishing that this class is a dependency which allows spring to keep track of it.

# Interviewee: Bezza
# Interviewer: Dean
- Q1: @RequestMapping?
- A1: HTTP request
- Q2: What are the scopes of a bean?
- A2: 5 total. Singleton, prototype, 
- Q3: What is a tomcat server? 
- A3: Server that comes with Spring boot used to handle web requests and responses
- Q4: What part of spring does tomcat come with?
- A4: Spring boot
- Q5: Tell me about a transaction.
- A5: Transaction is a set of queries that need to be executed as one unit where all or none go through.


